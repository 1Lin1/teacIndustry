git add .
git commit -m 'uat'
git push origin uat
ssh root@120.24.84.162 'cd /root/projects/industry && git pull origin uat && forever restart bin/www '