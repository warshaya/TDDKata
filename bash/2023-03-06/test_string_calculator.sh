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
  echo
  return "$r_val"
}

accumulated_results=0

#### test cases here #####


test_add "" "0"
accumulated_results=$((accumulated_results + $?))

test_add "1" "1"
accumulated_results=$((accumulated_results + $?))

test_add "1,2" "3"
accumulated_results=$((accumulated_results + $?))

test_add "0,2" "2"
accumulated_results=$((accumulated_results + $?))

#### end test cases here ####

echo "accumulated_results: $accumulated_results"
exit $accumulated_results

