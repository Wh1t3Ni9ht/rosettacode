def sum(x, y)
  return x + y
end

puts Math.sqrt(100)

def saySum(sum)
  return "Your sum is #{sum}"
end

puts saySum(sum(2, 3))

class Greeter
  attr_accessor :name
  def initialize(name = "World")
    @name = name
  end

  def say_hi()
    puts "Hi #{@name}"
  end

  def say_bye()
    puts "Bye #{@name}"
  end
end

greeter = Greeter.new('hamood')

greeter.say_hi()
greeter.say_bye()

greeter.name = 'muhamad'

greeter.say_hi()
greeter.say_bye()

if -1 > 0
  puts "yes it is"
else
  puts "no it is'nt"
end


doors = []

(0..99).each do |i|
  doors << false
end

# (1..doors.length).each do |i|
#   j = i
#   while j <= doors.length do
#     doors[j - 1] = !doors[j - 1]
#     j += i
#   end
# end

# (0..doors.length).each do |i|
#   if doors[i]
#     puts "Door #{i + 1} is open"
#   end
# end

# Optimized
length = (Math.sqrt(doors.length)).to_i
(1..length).each do |i|
  puts "Door #{i ** 2} is open"
end
