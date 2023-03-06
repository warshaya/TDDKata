#!/bin/bash

add () {
  r_val=""
  add_result=""
  echo "LOG: string_calculator.sh.add: function called using args $1" 1>&2
  if [[ "$1" == "" ]]
  then
    add_result=0
    r_val=0
  else
    echo "LOG: value found" 1>&2
    check_if_comma=$(echo $1 | grep ",")
    if [[ "$check_if_comma" == "" ]]
    then
      echo "LOG: result of grep: $check_if_comma   and return value: $?" 1>&2
      add_result=$1
      r_val=0
    else
      echo "LOG: found a comma in the input string" 1>&2
      # split and sum
      numbers=$(echo "$1" | tr "," " ")
      echo "LOG: found these numbers: $numbers" 1>&2
      # from https://unix.stackexchange.com/questions/544926/bash-sum-numbers-in-a-variable
      # also https://tldp.org/LDP/abs/html/string-manipulation.html
      arr=( $numbers )
      add_result="$((${arr[@]/%/+}0))"
      r_val=0
    fi
  fi
  echo $add_result
  return $r_val
}

