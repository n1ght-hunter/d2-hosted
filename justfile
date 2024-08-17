
[doc("List all tasks")]
default:
    @just --list\

run-go:
    go run main.go

install: install-go install-node

install-node:
    cd frontend && pnpm install

install-go:
    echo "todo"