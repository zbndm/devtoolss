import Head from "next/head";
import Link from "next/link";

import styles from "../styles/css.module.css";
import useSWR from "swr";
import { useEffect } from "react";
import { DevToolsView } from "../components/DevToolsView";


export default function Home() {
  useSWR("/api/hello?error=true");
  const { data, mutate, error } = useSWR(
    `/api/hello${typeof window !== "undefined" ? location.search : ""}`
  );
  const { data: data2 } = useSWR("/api/hello?foo");

  useEffect(() => {
    const timerId = setInterval(() => {
      mutate();
    }, 5000);
    return () => clearInterval(timerId);
  }, [mutate]);

  return (
    <div className={styles.container}>
      

      <main className={styles.main}>
     
       
      
       
       
           
            <DevToolsView/>
          
        

      </main>
   
    </div>
  );
}
