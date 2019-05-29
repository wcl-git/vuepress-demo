#!/bin/bash
echo "deploy"
if [ -d "./doc/" ];then
echo "doc"
qt scp ./doc
else
echo "doc 不存在"
fi
