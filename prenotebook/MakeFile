# Version 2021-12-28
ANSI_RED=\033[0;31m
ANSI_NOCOLOR=\033[0m # No Color

.PHONY: help all clean install test-build all-patches

help: ## Displays help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-z0-9A-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

install: ## Install dependancies
	yarn 

start: ## Start serving the frontend
	yarn start

check: ## Run checks which needs to pass in the build
	npx prettier --check .

fix: ## Run auto fixes for checks that fail
	npx prettier --write .

generate: ## Generate the frontend build
	@yarn build