#!/usr/bin/ruby

require 'cgi'

cgi = CGI.new
file = 'todo.txt'
if cgi.key?('add')
  data = cgi['add']
  open(file, 'a') do |f|
    f.print format("%d%d", Time.now.to_i, rand(10)), ":" # id
    f.print data, ":", 0, "\n"
  end
elsif cgi.key?('update')
  id = cgi['update']
  open(file, 'r+') do |f|
    data = f.readlines.collect do |line|
      if line =~ /^#{id}:(.*?):(\d+)/
        "#{id}:#{$1}:false"
        $2 == '0' ? "#{id}:#{$1}:1\n" : "#{id}:#{$1}:0\n"
      else
        line
      end
    end.join
    f.rewind
    f.print data
    f.truncate f.pos
  end
else
  open(file, 'r') do |f|
    data = f.read
  end
end

print cgi.header("content-type" => "text/plain", "charset" => "UTF-8")
print data
