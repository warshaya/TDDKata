
from glob import glob
import os
import logging
from pprint import pformat


def main():
    """Run operations on files."""
    files = glob("./**/package*.json", recursive=True)
    logging.info("files found: %s", pformat(files))

    for file in files:
        with open(file, "r") as f:
            file_data = f.readlines()
        logging.info("file_data: %s", pformat(file_data))
        for line_idx, line in enumerate(file_data):
            if "hoek" in line:
                logging.info("file: %s, line_dx: %s, line: %s", file, line_idx, line)


if __name__ == "__main__":
    logging.basicConfig(level=logging.INFO)
    main()
