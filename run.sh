#!/usr/bin/env sh

######################################################################
# @author      : DevEkla (ekla@ArchLinuxEkla)
# @file        : run
# @created     : samedi janv. 21, 2023 15:15:30 CET
#
# @description : 
######################################################################

npm start &
echo pidof webserver : "$!"
webserver="$!"
npm run dbserver &
echo pidof jsonserver : "$!"
jsonserver=$

