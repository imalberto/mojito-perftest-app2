
reset
set title " Using cached renderers vs creating new ones per request\n \
ab -n 500 -n 5"

set key outside right
set grid
unset xtics
set xlabel "requests"
set ylabel "time"
# set autoscale

# IGNORE_ABOVE=100
IGNORE_ABOVE=300
DEFAULT_Y_VALUE=15
filter(x)=(x>=IGNORE_ABOVE)?(DEFAULT_Y_VALUE):(x)

# set yrange [0.001:100]
set yrange [0.001:50]

#plot    "view-engine-cached.csv" using (filter($1)) title "cached" smooth bezier with lines linecolor rgbcolor "red", \
#        "view-engine-cached_optimized.csv" title "cached optimized" smooth bezier with lines linecolor rgbcolor "blue", \
#        "view-engine-new.csv" title "new object" smooth bezier with lines linecolor rgbcolor "green"

# plot    "view-engine-cached.csv" using (filter($1)) title "cached" smooth cspline with lines linecolor rgbcolor "red", \
#    "view-engine-cached_optimized.csv" using (filter($1)) title "cached optimized" smooth cspline with lines linecolor rgbcolor "blue", \
#        "view-engine-new.csv" using (filter($1)) title "new object" smooth cspline with lines linecolor rgbcolor "green"

#plot    "view-engine-cached_optimized.csv" using (filter($1)) title "cached" smooth cspline with lines linecolor rgbcolor "blue", \
#        "view-engine-new.csv" using (filter($1)) title "new object" smooth cspline with lines linecolor rgbcolor "green"

# view-engine-cached_optimized_noRS.csv
plot    "view-engine-cached_optimized_noRS_1.csv" using (filter($1)) title "cached" smooth cspline with lines linecolor rgbcolor "blue", \
        "view-engine-new_1.csv" using (filter($1)) title "new object" smooth cspline with lines linecolor rgbcolor "green"

