start: env
	docker compose -f docker-compose.dev.yml up

stop:
	docker compose -f docker-compose.dev.yml down

clean-dev: stop-dev
	docker volume rm postgres-volume-dev | true
	rm .env

re: clean-dev start-dev

start-prod: build-prod
	docker compose -f docker-compose.prod.yml up

stop-prod:
	docker compose -f docker-compose.prod.yml down

build-prod: env
	docker compose -f docker-compose.prod.yml build

env:
	@if [ ! -e .env ]; then \
		printf "$(GREEN)Generate environment variables\n$(DEFAULT)"; \
		sh create-env.sh; \
	fi



.PHONY: env start-dev stop-dev start-prod stop-prod build-prod
