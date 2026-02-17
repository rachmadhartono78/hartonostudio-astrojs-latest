import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    collections: {
        posts: collection({
            label: 'Posts',
            slugField: 'title',
            path: 'src/content/blog/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description' }),
                pubDate: fields.date({ label: 'Publication Date' }),
                heroImage: fields.image({
                    label: 'Hero Image',
                    directory: 'src/assets',
                    publicPath: '../../assets/',
                }),
                content: fields.mdx({
                    label: 'Content',
                    options: {
                        imageDirectory: 'src/assets',
                        publicPath: '../../assets/',
                    },
                }),
            },
        }),
    },
});
