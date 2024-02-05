
#!/bin/bash

TAG=$1
ENV=$2

cp ./env/.env.$ENV ./.env.production

docker build -t $DOCKER_IMAGE:$TAG .
if [ $? -ne 0 ]; then
    echo "Failed docker build"
    exit 1
  fi

docker tag 
docker push
  if [ $? -ne 0 ]; then
    echo "Failed docker push"
    exit 1
  fi

