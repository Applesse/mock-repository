echo "From where do you want to move ALL files?"
read fromWhereCopy
echo "Where do you want them to be moved?"
read toWhereCopy
if [ -d "$fromWhereCopy" ] && [ -d "$toWhereCopy" ]; then
echo "Moving files.."
cd $fromWhereCopy/
    tar cvzf files.tar.gz *
    mv files.tar.gz ../$toWhereCopy/
    rm *
    cd ../$toWhereCopy/
    tar xvzf files.tar.gz
    rm files.tar.gz
    echo "done"
else
    echo "Incorrect folders"
fi
