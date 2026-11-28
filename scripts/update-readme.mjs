import { updateAllFeedsAndReadme } from './update-feeds.mjs';

updateAllFeedsAndReadme().catch((err) => {
  console.error(err);
  process.exit(1);
});
