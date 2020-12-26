while true; do date && curl -m 5 http://localhost:12458/healthcheck; sleep 1; done
