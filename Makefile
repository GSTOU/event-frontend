TAG = "registry-dev.gstou.ru/events-front"

all: buildx push
buildx:
	docker buildx build -t $(TAG) .
push:
	docker push $(TAG)