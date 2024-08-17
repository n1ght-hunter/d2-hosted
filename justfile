
[doc("List all tasks")]
default:
    @just --list\

run-go:
    go run main.go

[doc("install all necessary dependencies")]
install: install-go install-node

[doc("Install node dependencies")]
install-node:
    cd frontend && pnpm install

[doc("Install go dependencies")]
install-go:
    go mod download