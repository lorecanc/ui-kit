import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Button } from '../../../components/ui/button';
import { AspectRatio } from '../../../components/ui/aspect-ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../../components/ui/hover-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../../components/ui/carousel';
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from '../../../components/ui/empty';
import { Upload, Image as ImageIcon, FileText, Eye, Download } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { PageSection } from '../../../components/layout/PageContent';
export function ContentMediaPage() {
  return (
    <>
      <PageSection span="full" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Content & Media</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage all your digital assets and media collections.</p>
        </div>
      </PageSection>
      <PageSection span={1}>
      <Card>
        <CardHeader>
          <CardTitle>Featured Content</CardTitle>
          <CardDescription>Highlight your best content in the carousel.</CardDescription>
        </CardHeader>
        <CardContent>
          <Carousel className="w-full">
            <CarouselContent>
              {[
                { title: "Summer Campaign 2024", category: "Marketing", color: "bg-blue-500" },
                { title: "Product Launch Assets", category: "Design", color: "bg-purple-500" },
                { title: "Annual Report Graphics", category: "Finance", color: "bg-green-500" },
                { title: "Social Media Kit", category: "Social", color: "bg-orange-500" },
                { title: "Brand Guidelines v3", category: "Brand", color: "bg-red-500" },
              ].map((item, i) => (
                <CarouselItem key={i} className="md:basis-full lg:basis-full">
                  <div className="p-1">
                    <Card className="overflow-hidden">
                      <AspectRatio ratio={16 / 9} className={cn(item.color, "flex items-center justify-center")}>
                        <ImageIcon className="h-12 w-12 text-white/60" />
                      </AspectRatio>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{item.title}</CardTitle>
                        <CardDescription>{item.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>12 files</span>
                          <span>2.4 MB</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>
      </PageSection>

      <PageSection span={1}>
      <Card>
        <CardHeader>
          <CardTitle>Media Library</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "Hero Banner.png", type: "Image", size: "1.2 MB", color: "bg-sky-400" },
                  { name: "Logo Pack.zip", type: "Document", size: "4.8 MB", color: "bg-amber-400" },
                  { name: "Product Demo.mp4", type: "Video", size: "24.1 MB", color: "bg-rose-400" },
                  { name: "Infographic.svg", type: "Image", size: "340 KB", color: "bg-emerald-400" },
                  { name: "Presentation.pptx", type: "Document", size: "8.5 MB", color: "bg-orange-400" },
                  { name: "Team Photo.jpg", type: "Image", size: "2.1 MB", color: "bg-violet-400" },
                  { name: "Brand Guide.pdf", type: "Document", size: "3.2 MB", color: "bg-teal-400" },
                  { name: "Tutorial.mp4", type: "Video", size: "18.7 MB", color: "bg-pink-400" },
                ].map((item, i) => (
                  <HoverCard key={i}>
                    <HoverCardTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow overflow-hidden">
                        <AspectRatio ratio={4 / 3} className={cn(item.color, "flex items-center justify-center")}>
                          {item.type === "Image" && <ImageIcon className="h-8 w-8 text-white/60" />}
                          {item.type === "Document" && <FileText className="h-8 w-8 text-white/60" />}
                          {item.type === "Video" && <div className="h-8 w-8 rounded-full border-2 border-white/60 flex items-center justify-center"><div className="h-0 w-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white/60 border-b-[6px] border-b-transparent ml-1" /></div>}
                        </AspectRatio>
                        <CardContent className="p-3">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.size}</p>
                        </CardContent>
                      </Card>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-64">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">{item.name}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="secondary">{item.type}</Badge>
                          <span>{item.size}</span>
                        </div>
                        <div className="flex gap-1 pt-1">
                          <Button variant="outline" size="sm" className="flex-1 text-xs"><Eye className="mr-1 h-3 w-3" /> Preview</Button>
                          <Button variant="outline" size="sm" className="flex-1 text-xs"><Download className="mr-1 h-3 w-3" /> Download</Button>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="images" className="mt-6">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon"><ImageIcon className="h-6 w-6 text-muted-foreground" /></EmptyMedia>
                  <EmptyTitle>No images found</EmptyTitle>
                  <EmptyDescription>Upload images to get started.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            </TabsContent>

            <TabsContent value="documents" className="mt-6">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon"><FileText className="h-6 w-6 text-muted-foreground" /></EmptyMedia>
                  <EmptyTitle>No documents yet</EmptyTitle>
                  <EmptyDescription>Upload documents to organize your content.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            </TabsContent>

            <TabsContent value="videos" className="mt-6">
              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon"><div className="h-6 w-6 rounded-full border-2 border-muted-foreground flex items-center justify-center"><div className="h-0 w-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-muted-foreground border-b-[4px] border-b-transparent ml-0.5" /></div></EmptyMedia>
                  <EmptyTitle>No videos uploaded</EmptyTitle>
                  <EmptyDescription>Add video content to your media library.</EmptyDescription>
                </EmptyHeader>
              </Empty>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      </PageSection>
    </>
  );
}
