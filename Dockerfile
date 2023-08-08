FROM node:15-alpine as builder

WORKDIR /workdir

COPY . .

RUN npm install --force

RUN npm run build

# ---

FROM nginx:latest

WORKDIR /workdir

COPY --from=builder /workdir/dist /usr/share/nginx/html
COPY --from=builder /workdir/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
