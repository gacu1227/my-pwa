"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PwaLogin() {
  const router = useRouter()
  useEffect(() => {}, []);

  const handleLogin = () => {
    if ('serviceWorker' in navigator) {
      console.log("インストール開始")
      navigator.serviceWorker
        .register('/my-pwa/sw.js')
        .then(registration => {
          console.log('インストールしました。', registration.scope);
        })
        .catch(error => {
          console.error('インストールに失敗しました。', error);
        });
    }
    router.push("/pwa/hoge/")
  }


  return (
    <div>
      ログインページ
      <button onClick={handleLogin}>認証</button>
    </div>
  );
}
