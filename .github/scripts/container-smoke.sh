#!/usr/bin/env bash

set -euo pipefail

image=${1:?container image is required}
container=production-smoke

# Invoked by the EXIT trap.
# shellcheck disable=SC2329
cleanup() {
  docker rm --force "$container" 2>/dev/null || true
}

trap cleanup EXIT

docker run --detach --name "$container" \
  --publish 127.0.0.1:43118:3000 \
  "$image"

for _ in $(seq 1 30); do
  if curl --fail --silent http://127.0.0.1:43118/api/health >/dev/null; then
    exit 0
  fi
  sleep 1
done

docker logs "$container"
exit 1

