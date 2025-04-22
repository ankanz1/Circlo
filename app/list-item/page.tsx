import { Camera, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"

export default function ListItemPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">List Your Item</h1>
        <p className="text-gray-600">Share your items with the community and earn money while helping others.</p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Item Details</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="preview">Preview & Post</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Item Title</Label>
                    <Input id="title" placeholder="e.g., Professional DSLR Camera" />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tools">Tools</SelectItem>
                          <SelectItem value="electronics">Electronics</SelectItem>
                          <SelectItem value="outdoor">Outdoor</SelectItem>
                          <SelectItem value="kitchen">Kitchen</SelectItem>
                          <SelectItem value="cultural">Cultural Item</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Price per Day (₹)</Label>
                      <Input id="price" type="number" min="1" placeholder="2,075" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your item, including condition, features, and any special instructions."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Your neighborhood or general area" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch i />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="cultural-item" />
                    <Label htmlFor="cultural-item">This is a cultural heritage item</Label>
                  </div>

                  <div className="cultural-story hidden space-y-2">
                    <Label htmlFor="cultural-story">Cultural Story</Label>
                    <Textarea
                      id="cultural-story"
                      placeholder="Share the history, cultural significance, or story behind this item."
                      rows={4}
                    />
                  </div>

                  <Button type="button" className="w-full">
                    Continue to Photos
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="photos" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Upload Photos</Label>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                      <div className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4 text-center hover:bg-gray-50">
                        <Upload className="mb-2 h-8 w-8 text-gray-400" />
                        <p className="text-sm text-gray-500">Click to upload</p>
                        <input type="file" className="hidden" accept="image/*" />
                      </div>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4 text-center hover:bg-gray-50"
                        >
                          <Camera className="h-8 w-8 text-gray-400" />
                          <p className="text-sm text-gray-500">Add photo</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">
                      Upload up to 6 high-quality photos of your item. The first photo will be your listing's main
                      image.
                    </p>
                  </div>

                  <Button type="button" className="w-full">
                    Continue to Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preview" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="rounded-lg bg-gray-50 p-4">
                    <h3 className="mb-4 text-lg font-semibold">Item Preview</h3>
                    <div className="aspect-video rounded-md bg-gray-200 flex items-center justify-center">
                      <Camera className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-xl font-semibold">Professional DSLR Camera</h4>
                      <p className="mt-1 text-teal-600">₹2,905/day</p>
                      <p className="mt-2 text-gray-600">
                        High-quality DSLR camera perfect for photography enthusiasts. Includes two lenses and a carrying
                        case.
                      </p>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <span>Downtown</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="terms">Terms & Conditions</Label>
                    <div className="rounded-md border border-gray-200 p-4 text-sm text-gray-600">
                      <p>
                        By listing your item on Circlo, you agree to our terms of service and rental policies. You are
                        responsible for the accuracy of your listing and the condition of your item.
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Post Listing</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
