import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const createBaseSchema = () => z.object({
  title: z.string().min(1),
  description: z.string().min(1)
})

const createFeatureItemSchema = () => createBaseSchema().extend({
  icon: z.string().min(1).editor({ input: 'icon' })
})

const createLinkSchema = () => z.object({
  label: z.string().min(1),
  to: z.string().min(1),
  icon: z.string().optional().editor({ input: 'icon' }),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

const createImageSchema = () => z.object({
  src: z.string().min(1).editor({ input: 'media' }),
  alt: z.string().optional(),
  loading: z.string().optional(),
  srcset: z.string().optional()
})

export const collections = {
  index: defineCollection({
    source: '0.index.yml',
    type: 'page',
    schema: z.object({
      hero: z.object(({
        links: z.array(createLinkSchema())
      })),
      sections: z.array(
        createBaseSchema().extend({
          id: z.string().min(1),
          orientation: orientationEnum.optional(),
          reverse: z.boolean().optional(),
          features: z.array(createFeatureItemSchema())
        })
      ),
      features: createBaseSchema().extend({
        items: z.array(createFeatureItemSchema())
      }),
      testimonials: createBaseSchema().extend({
        headline: z.string().optional(),
        items: z.array(
          z.object({
            quote: z.string().min(1),
            user: z.object({
              name: z.string().min(1),
              description: z.string().min(1),
              to: z.string().min(1),
              target: z.string().min(1),
              avatar: createImageSchema()
            })
          })
        )
      }),
      cta: createBaseSchema().extend({
        links: z.array(createLinkSchema())
      })
    })
  }),
  docs: defineCollection({
    source: '1.docs/**/*',
    type: 'page'
  }),
  pricing: defineCollection({
    source: '2.pricing.yml',
    type: 'page',
    schema: z.object({
      plans: z.array(
        z.object({
          title: z.string().min(1),
          description: z.string().min(1),
          price: z.object({
            month: z.string().min(1),
            year: z.string().min(1)
          }),
          billing_period: z.string().min(1),
          billing_cycle: z.string().min(1),
          button: createLinkSchema(),
          features: z.array(z.string().min(1)),
          highlight: z.boolean().optional()
        })
      ),
      logos: z.object({
        title: z.string().min(1),
        icons: z.array(z.string())
      }),
      faq: createBaseSchema().extend({
        items: z.array(
          z.object({
            label: z.string().min(1),
            content: z.string().min(1),
            defaultOpen: z.boolean().optional()
          })
        )
      })
    })
  }),
  blog: defineCollection({
    source: '3.blog.yml',
    type: 'page'
  }),
  posts: defineCollection({
    source: '3.blog/**/*',
    type: 'page',
    schema: z.object({
      image: z.object({ src: z.string().min(1).editor({ input: 'media' }) }),
      authors: z.array(
        z.object({
          name: z.string().min(1),
          to: z.string().min(1),
          avatar: z.object({ src: z.string().min(1).editor({ input: 'media' }) })
        })
      ),
      date: z.date(),
      badge: z.object({ label: z.string().min(1) })
    })
  }),
  changelog: defineCollection({
    source: '4.changelog.yml',
    type: 'page'
  }),
  versions: defineCollection({
    source: '4.changelog/**/*',
    type: 'page',
    schema: z.object({
      title: z.string().min(1),
      description: z.string(),
      date: z.date(),
      image: z.string()
    })
  }),
  about: defineCollection({
    source: 'about.yml',
    type: 'page',
    schema: z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      content: z.string().optional(),
      images: z.array(
        z.object({
          src: z.string().min(1),
          alt: z.string().optional()
        })
      ).optional()
    })
  })
}
