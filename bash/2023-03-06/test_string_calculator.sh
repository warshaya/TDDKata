#!/bin/bash

source ./string_calculator.sh

test_add () {
  r_val="0"
  echo "r_val: $r_val"
  input="$1"
  echo "\$1: $1"
  expected="$2"
  echo "expected: $2"
  result="$(add $input)"
  echo "result: $result"
  if [[ "$result" == "$expected" ]]
  then
    echo "test passed using input: $1"
  else
    echo "test failed using input: $1"
    r_val="1"
  fi
  echo "r_val: $r_val"
  return "$r_val"
}

test_add "" "0"

