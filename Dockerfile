FROM alpine
RUN apk update
RUN apk add --no-cache jekyll
VOLUME /srv/repo
CMD jekyll serve --source /srv/repo --watch --host 0.0.0.0
