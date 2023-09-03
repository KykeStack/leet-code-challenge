import time

def calculate_execution_time(func, *args, **kwargs):
    """
    Measure the execution time of a given function with arguments.

    Args:
        func (callable): The function to be measured.
        *args: Positional arguments to pass to the function.
        **kwargs: Keyword arguments to pass to the function.

    Returns:
        float: The execution time in seconds.
    """
    start_time = time.time()
    func(*args, **kwargs)
    end_time = time.time()
    execution_time = end_time - start_time
    return execution_time


if __name__ == '__main__':
    ...