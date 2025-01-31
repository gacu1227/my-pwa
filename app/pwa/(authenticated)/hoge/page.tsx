"use client"
import { useRouter } from "next/navigation";

export default function Hoge() {
  const router = useRouter()

  const handleBack = () => {
    router.push("/pwa/login/")
  }

  const handleFuga = () => {
    router.push("/pwa/fuga")
  }

  const handleNoPwa = () => {
    router.push("/no-pwa/")
  }


  return (
    <div>
      認証後
      <div><button onClick={handleBack}>戻る</button></div>
      <div><button onClick={handleFuga}>Fuga</button></div>
      <div><button onClick={handleNoPwa}>PWA範囲外に移動</button></div>
      <a href="https://google.com">https://google.com</a>
    </div>
  );
}