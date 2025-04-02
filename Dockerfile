# Let's assume that we will use this Docker image:
# - In development: to simulate a prod environment.
# Run as: docker run -p <host port>:<container port> --env-file=.env --rm --init be-seed-v2
# - In production: gitlab, aws, gke, etc. We inject env vars through other means (gitlab, k8s secrets, etc.)
# Because of this, we don't need a "development" Dockerfile.
FROM node:alpine

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production=true
COPY . .

EXPOSE ${PORT}
CMD ["yarn", "start"]