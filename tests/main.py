import os
import sys
from frontend_app import config
from frontend_app.logger import setup_logging

def main():
    setup_logging(config.LOG_LEVEL)
    try:
        from frontend_app.app import run
        run()
    except Exception as e:
        print(f"An error occurred: {str(e)}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    if not os.environ.get("ENVIRONMENT"):
        os.environ["ENVIRONMENT"] = "development"
    main()