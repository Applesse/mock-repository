
echo "In what foleder you want to do files?"
read directory
echo "How many files?"
read numberFiles
cd $directory/
for ((i=1; i<=$numberFiles; i++))
do
touch file$i.txt
done
