<img src="onotation.png" width="128"/>

In theory, an O(1) function should have a constant time complexity regardless of the input size, while an O(log n) function should have a logarithmic time complexity, meaning its time complexity increases more slowly compared to linear or constant time complexities as the input size increases.

Explanation of the Observation
In your example, the O(1) function takes more time than the O(log n) function. This seems counterintuitive based on the theoretical understanding of time complexities. Here's why this might happen:

Fixed Input Size for O(1) Function:

The O(1) function you provided is actually performing a linear operation. It iterates n times (for (var i = 0; i < n; i++)). The misconception here is that it is O(1) when it is indeed O(n) because it runs n times.
O(log n) Iterations:

The O(log n) function doubles the value of i in each iteration (for (var i = 2; i <= n; i = i * 2)). This results in fewer iterations than the linear loop.
Number of Iterations
To illustrate with n = 10:

O(1) Function (actually O(n)):
Iterates 10 times (i.e., from 0 to 9).
O(log n) Function:
Iterates 3 times (i.e., 2, 4, 8).
Execution Time
The actual execution time can vary based on several factors:

JavaScript Engine Optimizations: The browser's JavaScript engine might optimize certain operations differently. For example, a loop with fewer iterations might be optimized better.
Overhead of Function Calls and Console Logging: The overhead for each console.log statement and the function call itself can affect the observed execution time. Logging 10 times vs. logging 3 times can make a significant difference in such small-scale examples.
Environmental Factors: The specific environment where the code runs (e.g., the browser, system load, etc.) can also impact the measured execution times.
Conclusion
The observed behavior is a result of the actual number of iterations and the inherent overheads in each function. Despite the theoretical time complexities, practical execution times can differ due to these reasons. The key takeaway is that time complexity gives an asymptotic measure of performance as input size grows, but practical performance for small inputs can be influenced by various factors.#   D A S  
 