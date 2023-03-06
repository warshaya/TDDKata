#!/bin/bash

add () {
  r_val=""
  add_result=""
  echo "LOG: string_calculator.sh.add: function called using args $1" 1>&2
  if [[ "$1" == "" ]]
  then
    add_result=0
    r_val=0
  fi
  echo $add_result
  return $r_val
}

