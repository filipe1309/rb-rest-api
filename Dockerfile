# Dockerfile
# FROM library/postgres
# COPY init.sql /docker-entrypoint-initdb.d/

FROM node:12.13.0-alpine
# RUN mkdir -p /app
# COPY . /app
WORKDIR /app
RUN adduser -S app
RUN npm install
RUN chown -R app /app
USER app



EXPOSE 3000
CMD [ "npm", "run", "pm2" ]