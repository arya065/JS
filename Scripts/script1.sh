#!/bin/bash
usernow=$(whoami)
if ($usernow="Manolo"); then
    echo "Hello"
else
    echo "Goodbye friendly $usernow"
fi