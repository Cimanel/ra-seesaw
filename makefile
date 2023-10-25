
build:
	$(MAKE) build-adminV3
	$(MAKE) build-adminV4

build-api:
	yarn --cwd ./api build

build-adminV3:
	yarn --cwd ./admin-v3 build

build-adminV4:
	yarn --cwd ./admin-v4 build

install:
	$(MAKE) install-api
	$(MAKE) install-adminV3
	$(MAKE) install-adminV4

install-api:
	yarn --cwd ./api 

install-adminV3:
	yarn --cwd ./admin-v3

install-adminV4:
	yarn --cwd ./admin-v4

start:
	$(MAKE) build
	yarn --cwd ./api start
