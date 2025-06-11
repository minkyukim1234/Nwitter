import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Tweet from "./tweet";
import styled from "styled-components";
import type { Unsubscribe } from "firebase/auth";

export interface ITweet {
  id: string;
  fileData?: string;
  tweet: string;
  userId: string;
  username: string;
  createAt: number;
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export default function Timeline() {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchTweets = async () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createAt", "desc"),
        limit(25)
      );
      // const snapshot = await getDocs(tweetsQuery);
      // const tweets = snapshot.docs.map((doc) => {
      //   const { tweet, createAt, userId, username, fileData } = doc.data();
      //   return {
      //     tweet,
      //     createAt,
      //     userId,
      //     username,
      //     fileData,
      //     id: doc.id,
      //   };
      // });
      unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweet, createAt, userId, username, fileData } = doc.data();
          return {
            tweet,
            createAt,
            userId,
            username,
            fileData,
            id: doc.id,
          };
        });
        setTweets(tweets);
      });
    };
    fetchTweets();
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet}></Tweet>
      ))}
    </Wrapper>
  );
}
