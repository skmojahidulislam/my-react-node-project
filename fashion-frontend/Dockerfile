# Step 1: build
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: static site (Nginx optional)
FROM alpine
WORKDIR /app
COPY --from=builder /app/build .
CMD ["sh", "-c", "ls && echo 'React Build Done'"]
