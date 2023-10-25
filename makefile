
build:
	$(MAKE) build-adminV3
	$(MAKE) build-adminV4

build-api:
	yarn --cwd ./api build

build-adminV3:
	yarn --cwd ./admin-v3 build

build-adminV4:
	yarn --cwd ./admin-v4 build

start:
	$(MAKE) build
	yarn --cwd ./api start
