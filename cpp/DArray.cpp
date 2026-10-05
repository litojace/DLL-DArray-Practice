

using namespace std;



DArray::DArray()
{
    capacity = CAP;

    numOfElements = 0;

    a = new int[capacity];
}



DArray::DArray(int newCapacity)
{
    capacity = newCapacity;

    a = new int[capacity];

    numOfElements = 0;
}



void DArray::addElement(int newElement)
{
    a[numOfElements] = newElement;

    ++numOfElements;
}



int DArray::getNumOfElements() const
{
    return numOfElements;
}



void DArray::replaceElementAt(
    int newElement,
    int idx
)
{
    a[idx] = newElement;
}



bool DArray::compareArrays(
    const DArray& otherArray
) const
{
    if (numOfElements !=
        otherArray.numOfElements)
    {
        return false;
    }

    else
    {
        int idx = 0;


        while (idx < numOfElements)
        {
            if (a[idx] ==
                otherArray.a[idx])
            {
                ++idx;
            }

            else
            {
                return false;
            }
        }


        return true;
    }
}



void DArray::printArray() const
{
    for (int i = 0;
         i < numOfElements;
         ++i)
    {
        cout << a[i] << " ";
    }


    cout << "\n";
}



DArray::~DArray()
{
    delete [] a;

    a = nullptr;
}