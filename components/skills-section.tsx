"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Code,
  LineChart,
  Lightbulb,
  Briefcase,
  Layers,
} from "lucide-react";

export function SkillsSection() {
  return (
    <Tabs defaultValue="development" className="mx-auto max-w-4xl">
      <TabsList className="mx-auto mb-8 grid w-full max-w-md grid-cols-3 bg-background/50">
        <TabsTrigger
          value="development"
          className="data-[state=active]:bg-purple-800 data-[state=active]:text-white"
        >
          <Code className="mr-2 h-4 w-4" />
          Development
        </TabsTrigger>

        <TabsTrigger
          value="design"
          className="data-[state=active]:bg-purple-800 data-[state=active]:text-white"
        >
          <Palette className="mr-2 h-4 w-4" />
          Design
        </TabsTrigger>

        <TabsTrigger
          value="product"
          className="data-[state=active]:bg-purple-800 data-[state=active]:text-white"
        >
          <Briefcase className="mr-2 h-4 w-4" />
          Product
        </TabsTrigger>
      </TabsList>

      <TabsContent value="development" className="mt-0">
        <Card className="border-purple-800/20 bg-background/50 shadow-sm">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center text-xl font-semibold text-purple-800">
                  <Code className="mr-2 h-5 w-5" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    React
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Next.js
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    TypeScript
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    React Native
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Expo
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    JavaScript
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    HTML/CSS
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Tailwind CSS
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Framer Motion
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-4 flex items-center text-xl font-semibold text-purple-800">
                  <Layers className="mr-2 h-5 w-5" />
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Node.js
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Express
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    MongoDB
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    PostgreSQL
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Firebase
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    GraphQL
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Supabase
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Fastify
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    REST APIs
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="design" className="mt-0">
        <Card className="border-purple-800/20 bg-background/50 shadow-sm">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center text-xl font-semibold text-purple-800">
                  <Palette className="mr-2 h-5 w-5" />
                  UI/UX Design
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Figma
                  </Badge>

                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Sketch
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Wireframing
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Prototyping
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    User Research
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Usability Testing
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="product" className="mt-0">
        <Card className="border-purple-800/20 bg-background/50 shadow-sm">
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 flex items-center text-xl font-semibold text-purple-800">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  Strategy
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Product Strategy
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Market Research
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Competitive Analysis
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    User Personas
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    User Journeys
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Roadmapping
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-4 flex items-center text-xl font-semibold text-purple-800">
                  <LineChart className="mr-2 h-5 w-5" />
                  Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Jira
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Notion
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    A/B Testing
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Analytics
                  </Badge>
                  <Badge className="bg-purple-800 hover:bg-purple-700">
                    Stakeholder Management
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
