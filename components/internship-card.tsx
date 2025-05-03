import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InternshipCardProps {
  company: string;
  position: string;
  logoUrl: string;
  location: string;
  duration: string;
  description: string;
  skills: string[];
  companyUrl?: string;
}

export function InternshipCard({
  company,
  position,
  logoUrl,
  location,
  duration,
  description,
  skills,
  companyUrl,
}: InternshipCardProps) {
  return (
    <Card className="group overflow-hidden border-purple-800/20 transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="relative h-16 w-16 overflow-hidden rounded-md border bg-white p-1">
          <Image
            src={logoUrl || "/placeholder.svg?height=64&width=64"}
            alt={`${company} logo`}
            fill
            className="object-contain p-1"
          />
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl text-purple-800">{position}</CardTitle>
          <div className="flex items-center gap-1">
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-purple-800 hover:underline"
            >
              {company}
            </a>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="border-purple-800/30 text-purple-800"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
