import { Star, GitFork, Circle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface GithubRepoCardProps {
  name: string;
  description: string;
  language: string;
  url: string;
}

export function GithubRepoCard({
  name,
  description,
  language,
  url,
}: GithubRepoCardProps) {
  // Function to determine language color
  const getLanguageColor = (lang: string) => {
    const colors: Record<string, string> = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-400",
      Python: "bg-green-500",
      Go: "bg-cyan-500",
      Rust: "bg-orange-500",
      Java: "bg-red-500",
    };
    return colors[lang] || "bg-gray-500";
  };

  return (
    <Card className="border-purple-800/20 transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-xl text-purple-800">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {name}
          </Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Circle className={`h-3 w-3 ${getLanguageColor(language)}`} />
            <span className="text-sm text-muted-foreground">{language}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-purple-800 hover:underline"
        >
          View Repository →
        </Link>
      </CardFooter>
    </Card>
  );
}
