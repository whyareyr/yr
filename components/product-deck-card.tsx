import Image from "next/image"
import Link from "next/link"
import { Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductDeckCardProps {
  title: string
  description: string
  imageUrl: string
  downloadUrl: string
  viewUrl: string
}

export function ProductDeckCard({ title, description, imageUrl, downloadUrl, viewUrl }: ProductDeckCardProps) {
  return (
    <Card className="group overflow-hidden border-purple-800/20 transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-purple-800">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-2">
        <Button
          asChild
          size="sm"
          variant="outline"
          className="border-purple-800 text-purple-800 hover:bg-purple-800/10"
        >
          <Link href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Link>
        </Button>
        <Button asChild size="sm" className="bg-purple-800 hover:bg-purple-700">
          <Link href={viewUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
