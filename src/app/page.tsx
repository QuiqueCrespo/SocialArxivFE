import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, ArrowUp, ArrowDown, Tag } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "A New Approach to Quantum Machine Learning",
    abstract: "We propose a novel hybrid quantum-classical algorithm...",
    tags: ["quantum", "machine learning"],
    channel: "machine-learning",
    score: 42,
    comments: 12,
  },
  {
    id: 2,
    title: "Preprint: Large Language Models for Science",
    abstract: "This preprint explores the use of LLMs in scientific discovery...",
    tags: ["preprint", "LLM"],
    channel: "ai-research",
    score: 30,
    comments: 5,
  },
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="hot" className="mb-4">
        <TabsList>
          <TabsTrigger value="hot">Hot</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="top">Top</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md p-4 flex gap-4">
            <div className="flex flex-col items-center justify-center mr-2">
              <button className="text-gray-400 hover:text-blue-600"><ArrowUp /></button>
              <div className="font-bold text-lg">{post.score}</div>
              <button className="text-gray-400 hover:text-blue-600"><ArrowDown /></button>
            </div>
            <div className="flex-1">
              <Link href={`/post/${post.id}`} className="font-semibold text-lg hover:underline">
                {post.title}
              </Link>
              <div className="text-gray-600 mt-1 mb-2 line-clamp-2">{post.abstract}</div>
              <div className="flex gap-2 flex-wrap mb-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-700"><Tag className="w-3 h-3 mr-1" />{tag}</span>
                ))}
              </div>
              <div className="text-xs text-gray-500">
                <Link href={`/c/${post.channel}`} className="hover:underline">#{post.channel}</Link> ·
                <span className="ml-1 inline-flex items-center"><MessageCircle className="w-3 h-3 mr-1" />{post.comments} comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
