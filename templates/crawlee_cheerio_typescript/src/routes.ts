import { createCheerioRouter } from '@crawlee/cheerio';

export const router = createCheerioRouter();

router.addDefaultHandler(async ({ enqueueLinks, log }) => {
    log.info(`Handle Start URLs`);
    await enqueueLinks({
        globs: ['https://apify.com/*'],
        transformRequestFunction(opts) {
            opts.userData ??= {};
            opts.userData.label = 'DETAIL';
            return opts;
        },
    });
});

router.addHandler('LIST', async ({ log }) => {
    log.info(`Handle pagination`);
});

router.addHandler('DETAIL', async ({ request, $, log }) => {
    const title = $('title').text();
    log.info(`Handle details: ${title} [${request.loadedUrl}]`);
});
