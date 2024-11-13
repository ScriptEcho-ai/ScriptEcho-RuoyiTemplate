#!/bin/bash
set -x
npm run build:pro
rsync -avz --delete --progress dist-pro/* haomo@192.168.1.7:/var/www/html/yudao-ui-admin-vue3/