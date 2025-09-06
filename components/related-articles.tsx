import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export type RelatedItem = {
  title: string
  href: string
  image?: string
  category?: string
}

export function RelatedArticles({
  items,
  title = 'Related Articles',
}: {
  items: RelatedItem[]
  title?: string
}) {
  if (!items?.length) return null
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {items.slice(0, 3).map((item, idx) => (
            <div key={idx} className="group rounded-lg border overflow-hidden hover:shadow-md transition-shadow">
              <Link href={item.href} className="block">
                <div className="relative h-36">
                  <Image
                    src={item.image || '/placeholder.jpg'}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  {item.category && (
                    <div className="text-xs text-blue-700 mb-1 font-semibold">{item.category}</div>
                  )}
                  <div className="font-semibold group-hover:text-blue-700 line-clamp-2">{item.title}</div>
                  <div className="mt-2 text-sm text-blue-700">Read more →</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
