import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-white">
      <main className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-semibold mb-4 text-blue-700">FIRE MBTI</h1>
        <p className="text-gray-800 mb-8">8문항으로 알아보는 나의 불꽃 유형</p>
        <Link
          href="/quiz"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow-lg transition"
        >
          시작하기
        </Link>
      </main>
    </div>
  );
}
