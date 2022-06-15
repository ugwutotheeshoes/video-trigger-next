import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRef, useState } from "react";
import { Video, CloudinaryContext } from "cloudinary-react";
import Form from "./Form";

export default function Home() {
  const [form, setForm] = useState(false);
  const playFunction = () => {
    setForm(false);
  };
  const endFunction = () => {
    setForm(true);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Feedback From Trigger</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Feedback form trigger from video events in Next.js
        </h1>
        <CloudinaryContext cloud_name="ugwutotheeshoes">
          <div className={styles.video}>
            <Video
              publicId="milkshake"
              width="750px"
              height="420px"
              controls
              onPlay={playFunction}
              onEnded={endFunction}
            />
          </div>
        </CloudinaryContext>
        {form && <Form />}
      </main>
    </div>
  );
}
