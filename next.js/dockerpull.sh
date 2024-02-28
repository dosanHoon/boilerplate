
#!/bin/bash

TAG=$1
ENV=$2

docker ps | grep  | awk '{print $1}' | xargs -r docker stop
docker ps | grep  | awk '{print $1}' | xargs -r docker rm



docker pull 
  if [ $? -ne 0 ]; then
    echo "Failed docker pull"
    exit 1
  fi
docker run -d -p 3000:3000 -v /workspace/logs:/app/logs 
